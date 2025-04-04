export type UserRole = 'guard' | 'employer' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface Guard extends User {
  licenseNumber: string;
  licenseExpiryDate: string;
  backgroundCheckStatus: 'pending' | 'approved' | 'rejected';
  backgroundCheckDate?: string;
  penaltyCount: number;
  isActive: boolean;
}

export interface Employer extends User {
  companyName: string;
  businessNumber: string;
  verificationStatus: 'pending' | 'approved' | 'rejected';
  verificationDate?: string;
}

export interface Shift {
  id: string;
  employerId: string;
  guardId?: string;
  status: 'open' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  startTime: string;
  endTime: string;
  location: {
    address: string;
    latitude: number;
    longitude: number;
    geofenceRadius: number; // in meters
  };
  hourlyRate: number;
  requirements: string;
  briefingNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface GuardLocation {
  guardId: string;
  shiftId: string;
  timestamp: string;
  latitude: number;
  longitude: number;
  accuracy: number;
}

export interface ClockEvent {
  id: string;
  guardId: string;
  shiftId: string;
  type: 'in' | 'out';
  timestamp: string;
  location: {
    latitude: number;
    longitude: number;
    accuracy: number;
  };
  verified: boolean;
}

export interface Payment {
  id: string;
  shiftId: string;
  guardId: string;
  employerId: string;
  amount: number;
  status: 'pending' | 'processed' | 'failed';
  processedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmergencyAlert {
  id: string;
  guardId: string;
  shiftId: string;
  timestamp: string;
  location: {
    latitude: number;
    longitude: number;
    accuracy: number;
  };
  status: 'active' | 'resolved';
  resolvedAt?: string;
  notes?: string;
}
