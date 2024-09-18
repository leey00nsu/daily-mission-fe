export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat('ko', { dateStyle: 'full' }).format(
    new Date(date),
  );
}

// 배열을 받아서 data와 meta를 반환하는 함수
// 기존의 infiniteQuery에서 사용하던 데이터 포맷을 사용하기 위해 만든 함수
export function formatPaginatedData<T>(data: T[]) {
  return [
    {
      data: [...data],
      meta: {
        isNext: false,
      },
    },
  ];
}
