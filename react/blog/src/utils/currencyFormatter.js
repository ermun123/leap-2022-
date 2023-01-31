export default function currencyFormatter(rawValue) {
    return new Intl.NumberFormat({ style: 'currency', maximumFractionDigits: 0 }).format(rawValue)
}