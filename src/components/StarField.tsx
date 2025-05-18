export default function StarField() {
  return (
    <canvas
      id="stars"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full -z-10 motion-safe:animate-twinkle"
    />
  )
}
