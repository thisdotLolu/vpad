import { ReactNode } from "react";

type PropsWithChildren<P = unknown> = P & { children?: ReactNode | ReactNode[] | undefined };

export type Component<P = {}> = React.FC<PropsWithChildren<P>>;