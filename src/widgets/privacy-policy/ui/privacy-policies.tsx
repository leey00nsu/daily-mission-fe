import Logo from '@/shared/ui/logo';

const PrivacyPolicies = () => {
  return (
    <section className="flex h-full w-full grow flex-col items-center justify-evenly">
      <div className="flex flex-col items-center gap-2">
        <Logo size="xlarge" />

        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold">1. 수집하는 개인정보 항목</h2>
            <p>당사는 네이버 로그인을 통해 다음과 같은 정보를 수집합니다.</p>
            <ul className="list-disc pl-5">
              <li>이름</li>
              <li>프로필 이미지</li>
              <li>이메일 주소</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">
              2. 개인정보의 수집 및 이용 목적
            </h2>
            <p>당사는 수집한 개인정보를 다음과 같은 목적으로 사용합니다.</p>
            <ul className="list-disc pl-5">
              <li>사용자 계정 생성 및 관리</li>
              <li>서비스 제공 및 유지보수</li>
              <li>고객지원 및 문의 응대</li>
              <li>서비스 개선 및 사용자 경험 향상</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">
              3. 개인정보의 보관 및 파기
            </h2>
            <p>
              당사는 개인정보를 서비스 이용 기간 동안 보관하며, 사용자가 계정을
              삭제하거나 서비스 이용을 중단할 경우 해당 정보를 즉시 삭제합니다.
              단, 관련 법령에 따라 보관이 필요한 경우 해당 기간 동안 보관할 수
              있습니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">
              4. 개인정보의 공유 및 제공
            </h2>
            <p>
              당사는 사용자의 개인정보를 제3자에게 제공하지 않으며, 법령에 의해
              요구되는 경우에만 예외적으로 제공될 수 있습니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">
              5. 개인정보 보호를 위한 조치
            </h2>
            <p>당사는 개인정보 보호를 위해 다음과 같은 조치를 시행합니다.</p>
            <ul className="list-disc pl-5">
              <li>보안 프로토콜을 적용하여 개인정보 암호화 및 보호</li>
              <li>내부 관리 절차를 통해 접근 통제 및 보안 강화</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">
              6. 사용자의 권리 및 행사 방법
            </h2>
            <p>
              사용자는 언제든지 자신의 개인정보에 대한 열람, 수정, 삭제를 요청할
              수 있으며, 관련 문의는 [문의처 이메일]을 통해 접수할 수 있습니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">
              7. 개인정보처리방침의 변경
            </h2>
            <p>
              본 개인정보처리방침은 변경될 수 있으며, 중요한 변경 사항이 있을
              경우 사전에 공지합니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">8. 문의처</h2>
            <p>
              본 개인정보처리방침에 대한 문의사항이 있으시면 아래의 연락처로
              문의해 주세요.
            </p>
            <ul className="list-disc pl-5">
              <li>https://github.com/leey00nsu</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicies;
