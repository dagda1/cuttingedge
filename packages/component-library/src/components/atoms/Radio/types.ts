export enum RadioLayout {
  inline = 'inline',
  stacked = 'stacked'
}

export type RadioProps<T = {}> = T & {
  id?: string;
  name: string;
  checked?: boolean;
  value: string | string | number;
};

export interface RadioEventHandlers {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface RadioLayoutProps {
  layout: RadioLayout;
  size: RadioSize;
}

export enum RadioSize {
  small = 'small',
  large = 'large'
}
