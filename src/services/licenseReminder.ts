/**
 * License Reminder Service
 * 
 * This service handles automatic reminders for security guards whose licenses are about to expire.
 * Guards will receive notifications 90 days before their license expiration date.
 */

import { addDays, differenceInDays, parseISO } from 'date-fns';

export interface Guard {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  licenseExpiryDate: string;
}

export interface ReminderSettings {
  firstReminderDays: number;
  secondReminderDays: number;
  finalReminderDays: number;
}

// Default reminder schedule at 90, 60, and 30 days before expiration
const DEFAULT_REMINDER_SETTINGS: ReminderSettings = {
  firstReminderDays: 90,
  secondReminderDays: 60,
  finalReminderDays: 30
};

/**
 * Check if a guard's license is expiring soon and needs a reminder
 */
export const checkLicenseExpiration = (
  guard: Guard, 
  settings: ReminderSettings = DEFAULT_REMINDER_SETTINGS
): boolean => {
  const expiryDate = parseISO(guard.licenseExpiryDate);
  const today = new Date();
  const daysUntilExpiry = differenceInDays(expiryDate, today);
  
  return (
    daysUntilExpiry === settings.firstReminderDays || 
    daysUntilExpiry === settings.secondReminderDays || 
    daysUntilExpiry === settings.finalReminderDays
  );
};

/**
 * Generate the list of guards who need reminders today
 */
export const getGuardsNeedingReminders = (
  guards: Guard[], 
  settings: ReminderSettings = DEFAULT_REMINDER_SETTINGS
): Guard[] => {
  return guards.filter(guard => checkLicenseExpiration(guard, settings));
};

/**
 * Send an email reminder to a guard
 */
export const sendLicenseExpirationEmail = async (guard: Guard): Promise<boolean> => {
  try {
    // In a real app, this would use an email service API
    console.log(`Email reminder sent to ${guard.fullName} at ${guard.email}`);
    return true;
  } catch (error) {
    console.error('Failed to send license expiration email:', error);
    return false;
  }
};

/**
 * Send an SMS reminder to a guard
 */
export const sendLicenseExpirationSMS = async (guard: Guard): Promise<boolean> => {
  try {
    // In a real app, this would use an SMS service API
    console.log(`SMS reminder sent to ${guard.fullName} at ${guard.phone}`);
    return true;
  } catch (error) {
    console.error('Failed to send license expiration SMS:', error);
    return false;
  }
};

/**
 * Process all reminders for guards whose licenses are expiring soon
 */
export const processLicenseReminders = async (
  guards: Guard[],
  settings: ReminderSettings = DEFAULT_REMINDER_SETTINGS
): Promise<number> => {
  const guardsToRemind = getGuardsNeedingReminders(guards, settings);
  let remindersSent = 0;
  
  for (const guard of guardsToRemind) {
    const expiryDate = parseISO(guard.licenseExpiryDate);
    const today = new Date();
    const daysUntilExpiry = differenceInDays(expiryDate, today);
    
    // Send both email and SMS reminders
    const emailSent = await sendLicenseExpirationEmail(guard);
    const smsSent = await sendLicenseExpirationSMS(guard);
    
    if (emailSent || smsSent) {
      remindersSent++;
      console.log(`Reminder sent to ${guard.fullName}. License expires in ${daysUntilExpiry} days.`);
    }
  }
  
  return remindersSent;
};
