const menus = {
  config: [], // 기본 설정
  member: [
    { url: '/admin/member', name: '회원목록' },
    { url: '/admin/member/add', name: '회원등록' },
  ],
  board: [
    { url: '/admin/board', name: '게시판 목록' },
    { url: '/admin/board/add', name: '게시판 등록' },
    { url: '/admin/board/list', name: '게시글 관리' },
  ],
};

export default menus;
