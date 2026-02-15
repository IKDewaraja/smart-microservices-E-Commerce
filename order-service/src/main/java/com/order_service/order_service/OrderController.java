package com.order_service.order_service;


import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "https://main.d1sapxm75hojo4.amplifyapp.com")
public class OrderController {

    @GetMapping
    public List<Order> getOrders() {
        return Arrays.asList(
                new Order("101", "Smart Watch", 1),
                new Order("102", "Laptop Stand", 2)
        );
    }
}