export const mockFetch = async <T>(data: T) => {
  return new Promise<{
    ok: boolean;
    json: () => T;
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        json: () => data,
      });
    }, 1000);
  });
};
