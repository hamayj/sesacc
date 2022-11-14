package sesac.spring.study.sesacspringstudy.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HelloController {
    @GetMapping("hi")
    public String getHi(Model model){
        model.addAttribute("text", "hihihi");
        model.addAttribute("utext", "<strong>utext</strong>");
        String[] names = {"kim", "lee", "park"};
        model.addAttribute("names", names);
        return "hi";
    }

    @GetMapping("hello")
    public String getHi2(){
        Person person = new Person();
        return "hi";
    }

    class Person {

    }

    @GetMapping("api")
    public String getApi(@RequestParam String n, Model model){
        model.addAttribute("name", n);
        return "api";
    }

//    /로 값이 올때 n이라고 들어온 변수를 string name에 넣겠다는 뜻.
    @GetMapping("api2/{n}")
    // na = n;
    public String getApi2(@PathVariable("n") String na, Model model){
        model.addAttribute("name", na);
        return "api";
    }
}
