package com.pj.eshopping.dto.request;

public record CartProductRequest(Long cartProductId, Long cartId, Long productId, Integer quantity) {
}