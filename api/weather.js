export default async function handler(req, res) {
  // Vercel 환경 변수에서 키를 가져옵니다.
  const serviceKey = process.env.weather_key;
  
  // 기상청 API URL (테스트용으로 서울 격자 60, 127 설정)
  // 오늘 날짜와 발표 시간은 실제 호출 시점에 맞게 조정이 필요합니다.
  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&dataType=JSON&base_date=20260508&base_time=0500&nx=60&ny=127`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "데이터를 가져오는데 실패했습니다." });
  }
}
