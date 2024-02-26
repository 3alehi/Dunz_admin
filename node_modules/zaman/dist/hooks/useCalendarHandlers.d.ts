import { type SyntheticEvent } from 'react';
import type { DatePickerValue } from '../types';
import type { CalendarDefaultProps, CalendarRangeProps } from 'src/packages/Calendar/Calendar.types';
type Event = SyntheticEvent<HTMLButtonElement>;
interface BaseUseCalendarHandlersType {
    from?: DatePickerValue;
    to?: DatePickerValue;
}
type useCalendarHandlersType = BaseUseCalendarHandlersType & (CalendarRangeProps | CalendarDefaultProps);
export declare const guardRange: (value: useCalendarHandlersType) => value is CalendarRangeProps;
export declare const useCalendarHandlers: (props: useCalendarHandlersType) => {
    handlers: {
        onMouseMove?: ((e: Event) => void) | undefined;
        onClick: (e: Event) => string | void;
    };
    from: Date | undefined;
    to: Date | null | undefined;
};
export default useCalendarHandlers;
