import { RouteProps, RouteComponentProps, match as Match } from 'react-router-dom';
import { HelmetData } from 'react-helmet';
import { Request, Response } from 'express';
import { IncomingMessage, ServerResponse } from 'http';
import { History, Location } from 'history';

export interface DocumentType {
  html: string;
}

export type Renderer = <T>(element: React.ReactElement<T>) => DocumentType | Promise<DocumentType>;

export interface DocumentProps<TDocument extends DocumentType, TData = {}, TParams = unknown> {
  req: Request;
  res: Response;
  helmet: HelmetData;
  assets: Assets;
  data: Promise<TData>[];
  renderPage: () => Promise<TDocument>;
  match: Match<TParams> | null;
}

export interface CtxBase {
  req?: IncomingMessage;
  res?: ServerResponse;
  history?: History;
  location?: Location;
}
export interface Ctx<P> extends CtxBase {
  match: Match<P>;
}

export interface AsyncRouteComponentState {
  Component: AsyncRouteableComponent | null;
}

export interface AsyncComponent<TData = {}, TParams = unknown> {
  getInitialProps: (props: Ctx<TParams>) => TData | undefined;
  load?: () => Promise<React.ReactNode>;
}

export interface AsyncRouteComponent<Props extends DocumentType, TParams = unknown, TData = {}>
  extends AsyncComponent<TParams, TData>,
    React.Component<DocumentProps<Props> & Props, AsyncRouteComponentState> {}

export type AsyncRouteComponentType<Props> =
  | React.ComponentClass<Props> & AsyncComponent
  | React.StatelessComponent<Props> & AsyncComponent;

export type AsyncRouteableComponent<Props = unknown> =
  | AsyncRouteComponentType<RouteComponentProps<Props>>
  | React.ComponentType<RouteComponentProps<Props>>
  | React.ComponentType<Props>;

export interface AsyncRouteProps<Props = unknown> extends RouteProps {
  component: AsyncRouteableComponent<Props>;
  redirectTo?: string;
}

export interface InitialProps<TData = {}> {
  match?: AsyncRouteProps;
  data: Promise<TData>[];
}

export type Module<P> =
  | {
      default?: P;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: string]: any;
    }
  | {
      exports?: P;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: string]: any;
    };

export interface Assets {
  [name: string]: {
    [ext: string]: string;
  };
}

export interface LayoutProps {
  location: Location;
  children: React.ReactNode;
}

export type LayoutComponent = React.ComponentType<LayoutProps>;
