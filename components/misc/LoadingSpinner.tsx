interface Props {
  width: string;
  height: string;
  color: string;
}

export default function LoadingSpinner({ width, height, color }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <canvas className={`animate-spin rounded-[50%] border-t-2`} style={{ borderColor: color, width, height }} />
    </div>
  );
}
