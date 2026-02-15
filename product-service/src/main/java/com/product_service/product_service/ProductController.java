package com.product_service.product_service;

import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "https://main.d1sapxm75hojo4.amplifyapp.com")
public class ProductController {

    @GetMapping
    public List<Product> getProducts() {
        return Arrays.asList(
                new Product("1", "Smart Watch", 150.00),
                new Product("2", "Wireless Earbuds", 80.00),
                new Product("3", "Laptop Stand", 45.00)
        );
    }
}