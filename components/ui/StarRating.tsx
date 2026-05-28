type StarRatingProps = {
  count?: number;
  half?: boolean;
};

export default function StarRating({ count = 5, half = false }: StarRatingProps) {
  const full = half ? count - 1 : count;
  return (
    <div className="flex text-gold" aria-label={`${count} star rating`} role="img">
      {Array.from({ length: full }).map((_, i) => (
        <span key={i} className="text-lg">⭐️</span>
      ))}
      {half && (
        <span className="text-lg">⭐</span>
      )}
    </div>
  );
}
