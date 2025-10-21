export interface Fee {
    name: string
    amount: number
}

export interface Payment {
    account_holder: string
    bank?: string
    account_number: string
    account_note?: string
    payment_location?: string
    fees: Fee[]
    note?: string
    payment_note?: string
}

export interface Shipping {
    name: string
    street: string
    postal_code: string
    city: string
    phone?: string
    email?: string
    note?: string
}

export interface WeaponLimit {
    default?: number
    max?: number
    recommended?: number
    with_competitions?: number
    description: string
}

export interface WeaponLimits {
    sport: WeaponLimit
    collector: WeaponLimit
}

export interface WorkPermit {
    required: boolean
    fee: number
    description: string
}

export interface AdditionalPermits {
    work_permit: WorkPermit
}

export interface OfficeHours {
    days?: string
    hours?: string
    monday?: string
    tuesday_thursday?: string
    note?: string
}

export interface CityData {
    city: string
    slug: string
    department: string
    payment: Payment
    shipping: Shipping
    weapon_limits: WeaponLimits
    additional_permits: AdditionalPermits
    document_submission?: string[]
    important_notes: string[]
    office_hours?: OfficeHours
}
