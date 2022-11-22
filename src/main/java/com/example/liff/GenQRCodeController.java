package com.example.liff;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GenQRCodeController {

	@GetMapping("/genqrcode")
	public String genQRCode() {
		return "genqrcode";
	}
	
}
