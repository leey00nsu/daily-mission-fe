export const createEventSource = () => {
  return new EventSource(
    `${process.env.NEXT_PUBLIC_API_HOST}/notify/subscribe`,
    {
      withCredentials: true,
    },
  );
};
