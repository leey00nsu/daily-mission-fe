'use client';

import { Week } from '@/entities/mission/model/type';
import cn from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

interface WeekCheckboxGroupBaseProps {
  week: Week;
  readOnly?: boolean;
}

interface WeekCheckboxGroupWithOnChangeProps
  extends WeekCheckboxGroupBaseProps {
  readOnly?: false;
  onChange: (week: Week) => void;
}

interface WeekCheckboxGroupWithoutOnChangeProps
  extends WeekCheckboxGroupBaseProps {
  readOnly: true;
  onChange?: never;
}

type WeekCheckboxGroupProps =
  | WeekCheckboxGroupWithOnChangeProps
  | WeekCheckboxGroupWithoutOnChangeProps;

const KR_DAYS: {
  [key: string]: string;
} = {
  mon: '월',
  tue: '화',
  wed: '수',
  thu: '목',
  fri: '금',
  sat: '토',
  sun: '일',
};

const WeekCheckboxGroup = ({ week, onChange }: WeekCheckboxGroupProps) => {
  const changeHandler = (day: string) => {
    if (onChange) {
      onChange({ ...week, [day]: !week[day] });
    }
  };

  return (
    <div className="flex justify-between gap-1">
      {Object.keys(week).map((day) => (
        <Button
          type="button"
          variant="ghost"
          key={day}
          onClick={() => changeHandler(day)}
          className={cn(
            'flex grow flex-col items-center justify-center rounded-md px-4 py-2',
            week[day] ? 'bg-muted' : 'bg-transparent',
          )}
        >
          <p
            className={cn(
              'text-sm',
              week[day] ? 'text-foreground' : 'text-muted-foreground',
            )}
          >
            {KR_DAYS[day]}
          </p>
        </Button>
      ))}
    </div>
  );
};

export default WeekCheckboxGroup;
