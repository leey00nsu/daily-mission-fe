'use client';

import { Button } from '@/shared/ui/button';

import {
  JoinMissionRequest,
  JoinMissionSchema,
} from '@/entities/mission/model/type';
import MissionJoinModal from '@/features/mission/ui/mission-join-modal';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { overlay } from 'overlay-kit';
import { useForm } from 'react-hook-form';

const MissionCredentialForm = () => {
  const form = useForm<JoinMissionRequest>({
    resolver: zodResolver(JoinMissionSchema),
    defaultValues: {
      credential: '',
    },
  });

  const onSubmit = (data: JoinMissionRequest) => {
    overlay.open(({ isOpen, close }) => {
      return (
        <MissionJoinModal formData={data} isOpen={isOpen} onClose={close} />
      );
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <FormField
          control={form.control}
          name="credential"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>미션 참여 코드</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  id="credential"
                  placeholder="미션 참여 코드를 입력해주세요."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full">미션 참여</Button>
      </form>
    </Form>
  );
};

export default MissionCredentialForm;
