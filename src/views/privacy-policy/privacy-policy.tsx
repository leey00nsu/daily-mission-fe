import PageContainer from '@/shared/ui/page-container';
import PrivacyPolicies from '@/widgets/privacy-policy/ui/privacy-policies';

const PrivacyPolicy = () => {
  return (
    <PageContainer
      headerOption={{
        title: '개인정보처리방침',
        leftIcon: 'leftArrow',
      }}
    >
      <PrivacyPolicies />
    </PageContainer>
  );
};

export default PrivacyPolicy;
