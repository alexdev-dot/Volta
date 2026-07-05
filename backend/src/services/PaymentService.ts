import { Payment, PaymentMethod, ApiResponse } from '../types';
import { storage } from '../storage/Storage';
import { generateId } from '../utils/helpers';

/**
 * Payment Service
 * Handles payment processing and payment method management
 */
export class PaymentService {
  private static instance: PaymentService;

  private constructor() {}

  static getInstance(): PaymentService {
    if (!PaymentService.instance) {
      PaymentService.instance = new PaymentService();
    }
    return PaymentService.instance;
  }

  /**
   * Create a payment
   */
  async createPayment(data: {
    bookingId: string;
    customerId: string;
    professionalId: string;
    amount: number;
    currency?: string;
    paymentMethod: string;
    promoCode?: string;
  }): Promise<ApiResponse<Payment>> {
    try {
      // Validate amount
      if (data.amount <= 0) {
        return {
          success: false,
          error: 'Amount must be greater than 0'
        };
      }

      // Apply promo code discount if provided
      let discountAmount = 0;
      if (data.promoCode) {
        const discount = this.applyPromoCode(data.promoCode, data.amount);
        if (discount) {
          discountAmount = discount;
        }
      }

      const finalAmount = data.amount - discountAmount;

      const newPayment: Payment = {
        id: generateId(),
        bookingId: data.bookingId,
        customerId: data.customerId,
        professionalId: data.professionalId,
        amount: finalAmount,
        currency: data.currency || 'KES',
        status: 'pending',
        paymentMethod: data.paymentMethod,
        promoCode: data.promoCode,
        discountAmount: discountAmount > 0 ? discountAmount : undefined,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      storage.addPayment(newPayment);

      return {
        success: true,
        data: newPayment,
        message: 'Payment created successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to create payment'
      };
    }
  }

  /**
   * Process payment (simulated)
   */
  async processPayment(paymentId: string): Promise<ApiResponse<Payment>> {
    try {
      const payment = storage.getPaymentById(paymentId);
      if (!payment) {
        return {
          success: false,
          error: 'Payment not found'
        };
      }

      if (payment.status !== 'pending') {
        return {
          success: false,
          error: 'Payment has already been processed'
        };
      }

      // Simulate payment processing
      // In production, this would integrate with a payment gateway
      const success = Math.random() > 0.1; // 90% success rate for simulation

      const updatedPayment = storage.updatePayment(paymentId, {
        status: success ? 'completed' : 'failed',
        transactionId: generateId()
      });

      if (!success) {
        return {
          success: false,
          error: 'Payment processing failed'
        };
      }

      return {
        success: true,
        data: updatedPayment!,
        message: 'Payment processed successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to process payment'
      };
    }
  }

  /**
   * Refund payment
   */
  async refundPayment(paymentId: string): Promise<ApiResponse<Payment>> {
    try {
      const payment = storage.getPaymentById(paymentId);
      if (!payment) {
        return {
          success: false,
          error: 'Payment not found'
        };
      }

      if (payment.status !== 'completed') {
        return {
          success: false,
          error: 'Can only refund completed payments'
        };
      }

      const updatedPayment = storage.updatePayment(paymentId, {
        status: 'refunded'
      });

      return {
        success: true,
        data: updatedPayment!,
        message: 'Payment refunded successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to refund payment'
      };
    }
  }

  /**
   * Get payment by ID
   */
  getPaymentById(id: string): Payment | null {
    return storage.getPaymentById(id) || null;
  }

  /**
   * Get payments for a customer
   */
  getCustomerPayments(customerId: string): Payment[] {
    const payments = storage.getPayments();
    return payments
      .filter(p => p.customerId === customerId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  /**
   * Get payments for a professional
   */
  getProfessionalPayments(professionalId: string): Payment[] {
    const payments = storage.getPayments();
    return payments
      .filter(p => p.professionalId === professionalId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  /**
   * Get payment by booking ID
   */
  getPaymentByBookingId(bookingId: string): Payment | null {
    const payments = storage.getPayments();
    return payments.find(p => p.bookingId === bookingId) || null;
  }

  /**
   * Add payment method
   */
  async addPaymentMethod(userId: string, data: {
    type: 'card' | 'mpesa' | 'bank_transfer';
    details: Record<string, any>;
    isDefault?: boolean;
  }): Promise<ApiResponse<PaymentMethod>> {
    try {
      // If this is set as default, remove default from other methods
      if (data.isDefault) {
        const existingMethods = storage.getPaymentMethodsByUserId(userId);
        existingMethods.forEach(method => {
          if (method.isDefault) {
            storage.updatePaymentMethod(method.id, { isDefault: false });
          }
        });
      }

      const newPaymentMethod: PaymentMethod = {
        id: generateId(),
        userId,
        type: data.type,
        details: data.details,
        isDefault: data.isDefault || false,
        createdAt: new Date().toISOString()
      };

      storage.addPaymentMethod(newPaymentMethod);

      return {
        success: true,
        data: newPaymentMethod,
        message: 'Payment method added successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to add payment method'
      };
    }
  }

  /**
   * Get payment methods for user
   */
  getUserPaymentMethods(userId: string): PaymentMethod[] {
    return storage.getPaymentMethodsByUserId(userId);
  }

  /**
   * Get default payment method for user
   */
  getDefaultPaymentMethod(userId: string): PaymentMethod | null {
    const methods = storage.getPaymentMethodsByUserId(userId);
    return methods.find(m => m.isDefault) || null;
  }

  /**
   * Delete payment method
   */
  async deletePaymentMethod(methodId: string, userId: string): Promise<ApiResponse<void>> {
    try {
      const methods = storage.getPaymentMethodsByUserId(userId);
      const method = methods.find(m => m.id === methodId);
      
      if (!method) {
        return {
          success: false,
          error: 'Payment method not found'
        };
      }

      if (method.userId !== userId) {
        return {
          success: false,
          error: 'Not authorized to delete this payment method'
        };
      }

      storage.deletePaymentMethod(methodId);

      return {
        success: true,
        message: 'Payment method deleted successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to delete payment method'
      };
    }
  }

  /**
   * Set default payment method
   */
  async setDefaultPaymentMethod(methodId: string, userId: string): Promise<ApiResponse<PaymentMethod>> {
    try {
      const methods = storage.getPaymentMethodsByUserId(userId);
      const method = methods.find(m => m.id === methodId);
      
      if (!method) {
        return {
          success: false,
          error: 'Payment method not found'
        };
      }

      if (method.userId !== userId) {
        return {
          success: false,
          error: 'Not authorized to modify this payment method'
        };
      }

      // Remove default from other methods
      methods.forEach(m => {
        if (m.isDefault) {
          storage.updatePaymentMethod(m.id, { isDefault: false });
        }
      });

      // Set as default
      const updated = storage.updatePaymentMethod(methodId, { isDefault: true });

      return {
        success: true,
        data: updated!,
        message: 'Default payment method updated'
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to set default payment method'
      };
    }
  }

  /**
   * Apply promo code
   */
  private applyPromoCode(code: string, amount: number): number {
    const promoCodes: Record<string, { discount: number; maxDiscount?: number }> = {
      'VOLTA10': { discount: 0.10, maxDiscount: 500 }, // 10% off, max 500
      'WELCOME20': { discount: 0.20, maxDiscount: 1000 }, // 20% off, max 1000
      'FIRSTBOOK': { discount: 0.15, maxDiscount: 750 } // 15% off, max 750
    };

    const promo = promoCodes[code.toUpperCase()];
    if (!promo) return 0;

    const discount = amount * promo.discount;
    return promo.maxDiscount ? Math.min(discount, promo.maxDiscount) : discount;
  }

  /**
   * Validate promo code
   */
  validatePromoCode(code: string): { valid: boolean; discount: number; maxDiscount?: number } {
    const promoCodes: Record<string, { discount: number; maxDiscount?: number }> = {
      'VOLTA10': { discount: 0.10, maxDiscount: 500 },
      'WELCOME20': { discount: 0.20, maxDiscount: 1000 },
      'FIRSTBOOK': { discount: 0.15, maxDiscount: 750 }
    };

    const promo = promoCodes[code.toUpperCase()];
    if (!promo) {
      return { valid: false, discount: 0 };
    }

    return {
      valid: true,
      discount: promo.discount,
      maxDiscount: promo.maxDiscount
    };
  }

  /**
   * Get payment statistics for a customer
   */
  getCustomerPaymentStats(customerId: string): {
    totalSpent: number;
    totalPayments: number;
    completedPayments: number;
    pendingPayments: number;
    failedPayments: number;
    refundedPayments: number;
  } {
    const payments = this.getCustomerPayments(customerId);
    const completedPayments = payments.filter(p => p.status === 'completed');
    
    return {
      totalSpent: completedPayments.reduce((sum, p) => sum + p.amount, 0),
      totalPayments: payments.length,
      completedPayments: completedPayments.length,
      pendingPayments: payments.filter(p => p.status === 'pending').length,
      failedPayments: payments.filter(p => p.status === 'failed').length,
      refundedPayments: payments.filter(p => p.status === 'refunded').length
    };
  }

  /**
   * Get payment statistics for a professional
   */
  getProfessionalPaymentStats(professionalId: string): {
    totalEarned: number;
    totalPayments: number;
    completedPayments: number;
    pendingPayments: number;
  } {
    const payments = this.getProfessionalPayments(professionalId);
    const completedPayments = payments.filter(p => p.status === 'completed');
    
    return {
      totalEarned: completedPayments.reduce((sum, p) => sum + p.amount, 0),
      totalPayments: payments.length,
      completedPayments: completedPayments.length,
      pendingPayments: payments.filter(p => p.status === 'pending').length
    };
  }
}

export const paymentService = PaymentService.getInstance();
