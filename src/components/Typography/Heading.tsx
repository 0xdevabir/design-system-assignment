
type HeadingProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export function Heading({ text, level = 1 }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyles = 'text-[black]';
  const sizeStyles = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  return <Tag className={`${baseStyles} ${sizeStyles[level]}`}>{text}</Tag>;
}
