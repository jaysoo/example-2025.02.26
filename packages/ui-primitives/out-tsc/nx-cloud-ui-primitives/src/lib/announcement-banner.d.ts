import type { ReactElement } from 'react';
import { ReactNode } from 'react';
/**
 * @example
 * <AnnouncementBanner showDismissedButton onDismissed={() => myCallback()>}>
 *   <Link to="/this/is/my-link" className="group">
 *     <strong className="font-semibold">Possible pseudo-title</strong>
 *     <svg
 *       viewBox="0 0 2 2"
 *       className="mx-2 inline h-0.5 w-0.5 fill-current"
 *       aria-hidden="true"
 *     >
 *       <circle cx={1} cy={1} r={1} />
 *     </svg>
 *     This is the text I want to display, only one short sentence&nbsp;
 *     <span
 *       aria-hidden="true"
 *       className="inline-flex transition-all group-hover:translate-x-2"
 *     >
 *       &rarr;
 *     </span>
 *   </Link>
 * </AnnouncementBanner>
 */
export declare function AnnouncementBanner({ children, onDismissed, showDismissButton, }: {
    children: ReactNode;
    onDismissed?: () => void;
    showDismissButton?: boolean;
}): ReactElement;
