export default function(str: string) {
  return str
    .replace(/[^(a-zA-ZA-Яa-я0-9_)+\s]/g, ' ')
    .split(/\s+/)
}