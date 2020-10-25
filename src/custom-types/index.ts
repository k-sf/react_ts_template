export type IconSource = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export interface TransitionCallbacks {
  onEnter?(node: HTMLElement): any;
  onEntered?(node: HTMLElement): any;
  onEntering?(node: HTMLElement): any;
  onExit?(node: HTMLElement): any;
  onExited?(node: HTMLElement): any;
  onExiting?(node: HTMLElement): any;
}

export type TransitionComponent = React.ComponentType<
  {
    in?: boolean;
    appear?: boolean;
  } & TransitionCallbacks
>;

export type TransitionType = boolean | TransitionComponent;
