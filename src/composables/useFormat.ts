const FormatPhone = (phoneNumber: string, international: boolean = false) => {
  let cleaned = phoneNumber.replace(/\D/g, "")

  if (international) {
    if (cleaned.startsWith("0")) {
      cleaned = cleaned.substring(1)
    }
    return `+66 ${cleaned.slice(0, 1)}-${cleaned.slice(1, 4)}-${cleaned.slice(4, 8)}`
  } else {
    if (cleaned.length === 9) {
      // For numbers without the leading 0 (used in international contexts)
      return `${cleaned.slice(0, 1)}-${cleaned.slice(1, 4)}-${cleaned.slice(4, 8)}`
    } else if (cleaned.length === 10) {
      // For local numbers with leading 0
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`
    } else {
      return phoneNumber // Return the original number if it doesn't match expected length
    }
  }
}

export { FormatPhone }
