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

  if (
    !data.id ||
    !data.name ||
    !data.password ||
    !data.email ||
    !data.passwordConfirm
  ) {
    next.error = "다 안채워졌어여";
  }

  return next;
}

export function splitSentences(text) {
  if (!text) return [];

  // 숫자+점은 제외하고 나머지 점에서 split
  const sentences = text
    .split(/(?<!\d)\.(?!\d)/)
    .map((s) => s.trim())
    .filter(Boolean);

  return sentences.map((s, idx) => {
    const parts = s.split(/(\*\*.*?\*\*)/g);
    const startsWithNumber = /^\d+\./.test(s); // 숫자. 으로 시작하는지 체크

    return (
      <span key={idx}>
        {/* 숫자.으로 시작하면 문장 시작 전에 줄 하나 더 추가 */}
        {startsWithNumber && <br />}
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            const inner = part.slice(2, -2);
            return (
              <span key={i} style={{ fontWeight: 600 }}>
                {inner}
              </span>
            );
          }
          return part;
        })}
        .
        <br />
      </span>
    );
  });
}

export function maskText(text) {
  if (text == null) return "***";
  const chars = Array.from(String(text)); // 유니코드 안전 분해
  const head = chars.slice(0, 3).join("");
  return `${head}***`;
}

export function formatNumber(num) {
  if (typeof num !== "number" || Number.isNaN(num)) return "";

  // 정수이면서 0~9 사이일 때만 ".0" 붙이기
  if (Number.isInteger(num) && num >= 0 && num < 10) {
    return `${num}.0`;
  }

  // 소수는 둘째 자리에서 반올림하되, 불필요한 0은 제거
  if (!Number.isInteger(num)) {
    return String(Number(num.toFixed(2)));
  }

  // 그 외 정수는 그대로
  return String(num);
}
