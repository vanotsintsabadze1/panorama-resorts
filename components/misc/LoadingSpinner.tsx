interface Props {
  width: string;
  height: string;
  color: string;
}

export default function LoadingSpinner({ width, height, color }: Props) {
  return <canvas className={`animate-spin rounded-[50%] border-t-2`} style={{ borderColor: color, width, height }} />;
}
