package com.example.liff;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class HelloController {

	@GetMapping("/")
	public String index() {
		return "index";
	}

}
