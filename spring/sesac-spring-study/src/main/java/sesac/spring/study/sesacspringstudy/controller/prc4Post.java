package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Array;
import java.util.ArrayList;

    @Controller
    public class prc4Post {
        ArrayList<Integer> years = new ArrayList<>();
        ArrayList<Integer> month = new ArrayList<>();
        ArrayList<Integer> days = new ArrayList<>();

    @GetMapping("form")
    public String getForm(Model model){
        for(int i = 1950; i<2023; i++){
            years.add(i);
        }
        for(int i = 1; i<13; i++){
            month.add(i);
        }
        for(int i = 1; i<32; i++){
            days.add(i);
        }
        model.addAttribute("years", years);
        model.addAttribute("month", month);
        model.addAttribute("days", days);
        return "prc4Form";
    }

    // 일반 폼 전송
    @PostMapping("postForm")
    public String postForm(
            @RequestParam(value="name") String name,
            @RequestParam String sex,
            @RequestParam int years,
            @RequestParam int month,
            @RequestParam int day,
            @RequestParam String interest,
            Model model
    ){
        model.addAttribute("name", name);
        model.addAttribute("sex", sex);
        model.addAttribute("years", years);
        model.addAttribute("month", month);
        model.addAttribute("day", day);
        model.addAttribute("interest", interest);
        return "prc4Result";
    }
}
