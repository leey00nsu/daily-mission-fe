import cn from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import { Week } from '@/types/mission';

interface WeekCheckboxGroupProps {
  value: Week;
  onChange: (value: Week) => void;
}

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

const WeekCheckboxGroup = ({ value, onChange }: WeekCheckboxGroupProps) => {
  return (
    <div className="flex justify-between gap-1">
      {Object.keys(value).map((day) => (
        <Button
          type="button"
          variant="ghost"
          key={day}
          onClick={() => onChange({ ...value, [day]: !value[day] })}
          className={cn(
            'flex grow flex-col items-center justify-center rounded-md px-4 py-2',
            value[day] ? 'bg-muted' : 'bg-transparent',
          )}
        >
          <p
            className={cn(
              'text-sm',
              value[day] ? 'text-foreground' : 'text-muted-foreground',
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
