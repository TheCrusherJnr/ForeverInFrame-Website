"use client";

import * as React from "react";
import { format } from "date-fns";
import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

type Props = {
  id?: string;
  name?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
};

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

export default function DatePicker({
  id,
  name,
  value,
  onChange,
  placeholder = "Pick a date",
  minDate,
  maxDate,
}: Props) {
  const [open, setOpen] = React.useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const disabledBefore = minDate ?? today;

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          id={id}
          type="button"
          className={
            "datepicker-trigger" +
            (value ? " datepicker-filled" : " datepicker-empty")
          }
          aria-label={value ? format(value, "PPP") : placeholder}
        >
          <span className="datepicker-value">
            {value ? format(value, "d MMMM yyyy") : placeholder}
          </span>
          <span className="datepicker-icon" aria-hidden="true">
            <CalendarIcon />
          </span>
          {/* Hidden input so the picked date is part of the form submission */}
          <input
            type="hidden"
            name={name}
            value={value ? format(value, "yyyy-MM-dd") : ""}
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="datepicker-popover"
          align="start"
          sideOffset={8}
        >
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(d) => {
              onChange?.(d);
              if (d) setOpen(false);
            }}
            disabled={{
              before: disabledBefore,
              ...(maxDate ? { after: maxDate } : {}),
            }}
            showOutsideDays
            weekStartsOn={1}
            captionLayout="dropdown"
            startMonth={new Date(today.getFullYear(), today.getMonth())}
            endMonth={new Date(today.getFullYear() + 3, 11)}
            defaultMonth={value ?? today}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
