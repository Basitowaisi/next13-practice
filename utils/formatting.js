export const formatMoney = (amount, currency = "INR") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  })
  return formatter.format(amount)
}

export const formatShortDescription = (description) =>
  description.slice(0, 50) + "..."

export const formatDescriptionForCart = (description) =>
  description.slice(0, 100) + "..."

export const formatShortTitle = (title) =>
  title.toLowerCase().slice(0, 25) + "..."

export const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US").format(number)
}
