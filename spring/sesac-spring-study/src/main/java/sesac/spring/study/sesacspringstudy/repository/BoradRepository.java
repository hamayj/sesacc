package sesac.spring.study.sesacspringstudy.repository;

import sesac.spring.study.sesacspringstudy.domain.Board;
import java.util.ArrayList;
import java.util.List;


public interface BoradRepository {
    Board save(Board board);
    List<Board> findAll();
}
