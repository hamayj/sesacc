package sesac.spring.study.sesacspringstudy.repository;

import sesac.spring.study.sesacspringstudy.domain.Board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class MemoryRepository implements BoardRepository{
    private static Map<Integer, Board> store = new HashMap<>();
    private static int id = 0;

    @Override
    public Board save(Board board){
        // board 값은 이름과 내용이 적혀왔다.
        // 추가하는 코드
        board.setID(++id); // autoincrement형식으로 구현해준거.
        // Map 방식을 이용할 때는 Put을 이용함.
        store.put(board.getID(),board); // Map에 키값쌍을 넣은거임.
        return board;

        // obj = {}
        // obj['string']="abd";

    }

    @Override
    public List<Board> findAll(){
        // 찾는 코드
        ArrayList<Board> result = new ArrayList<>(store.values());
    }

}
