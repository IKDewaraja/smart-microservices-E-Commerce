package com.order_service.order_service;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Order {
    private String orderId;
    private String productName;
    private int quantity;
}