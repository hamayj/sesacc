package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.ArrayList;


@Controller
public class prcThyme2 {
    @GetMapping("person")
    public String getPeople(Model model){
        ArrayList<Person> arrayList = new ArrayList<>();

//        system.out.println(god.name); ? 인스턴스에서는 못보는가.
        Person god = new Person("갓귤", 2);
//        god.setName("갓귤");
//        god.setAge(2);

        Person wow = new Person("짱귤", 3);
//        wow.setName("짱귤");
//        wow.setAge(3);

        Person birth = new Person("내일 생일인 귤", 4);
//        birth.setName("내일 생일인 귤");
//        birth.setAge(4);

        Person celeb = new Person("생일축하 귤", 6);
//        celeb.setName("생일축하 귤");
//        celeb.setAge(5);

        arrayList.add(god);
        arrayList.add(wow);
        arrayList.add(birth);
        arrayList.add(celeb);

        model.addAttribute("arrayList", arrayList); // 여기 부분 왜 헷갈리지.

        return "prcThyme2";
    }
}


