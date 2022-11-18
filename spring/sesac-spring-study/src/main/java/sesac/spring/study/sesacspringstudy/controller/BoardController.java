package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import sesac.spring.study.sesacspringstudy.domain.Board;
import sesac.spring.study.sesacspringstudy.service.BoardService;

@Controller
public class BoardController {
    private static BoardService boardService = new BoardService();

    @GetMapping("board-write")
    public String getBoardWrite(){
        return "board-write";
    }
    @PostMapping("board-write")
    public String postBoardWrite(BoardDTO, boardDTO){
        //boardDTO = { name : d, content: d}
        Board board = new Board();
        board.setName(boardDTO.getName());
    }
}

