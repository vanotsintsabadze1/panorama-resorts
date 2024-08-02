interface Props {
  children?: React.ReactNode;
  className?: string;
  onCellClick?: () => void;
}

export default function DateCell({ children, className, onCellClick }: Props) {
  return (
    <button onClick={() => (onCellClick ? onCellClick() : null)} className={`col-span-1 font-medium ${className}`}>
      {children}
    </button>
  );
}
