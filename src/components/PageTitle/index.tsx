import { Title } from 'react-head';

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  const fullTitle = title ? `${title} | pizza.shop` : 'pizza.shop';
  return <Title>{fullTitle}</Title>;
}
