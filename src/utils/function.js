export function isValidUserData(data) {
  const next = {};

  // 아이디: 입력이 있고 && 형식이 맞지 않는 경우
  if (data.id && !/^[A-Za-z][A-Za-z0-9]{5,}$/.test(data.id)) {
    next.id = "아이디는 6자 이상, 영문 시작 및 영문/숫자 조합이어야 합니다.";
  }

  // 이름: 입력이 있고 && 길이가 2 미만
  if (data.name && data.name.trim().length < 2) {
    next.name = "이름은 2자 이상이어야 합니다.";
  }

  // 비밀번호: 입력이 있고 && 길이가 8 미만
  if (data.password && data.password.length < 8) {
    next.password = "비밀번호는 8자 이상이어야 합니다.";
  }

  // 비밀번호 확인: 두 필드 모두 입력되어 있고 && 서로 다를 때
  if (
    data.password &&
    data.passwordConfirm &&
    data.password !== data.passwordConfirm
  ) {
    next.passwordConfirm = "비밀번호가 일치하지 않습니다.";
  }

  // 이메일: 입력이 있고 && 형식이 맞지 않는 경우
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    next.email = "올바른 이메일 형식이 아닙니다.";
  }

  // 사업자등록번호: 입력이 있고 && 숫자 10자리 아니면
  if (data.bizRegNo && !/^\d{10}$/.test(data.bizRegNo.replaceAll("-", ""))) {
    next.businessNumber = "사업자등록번호는 숫자 10자리여야 합니다.";
  }

  return next;
}
