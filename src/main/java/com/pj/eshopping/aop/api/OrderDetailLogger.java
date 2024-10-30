package com.pj.eshopping.aop.api;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class OrderDetailLogger {
    @Pointcut("within(com.pj.eshopping.web.order.OrderController)")
    public void orderControllerPointcut() {
        //Point cut orderDetailControllerPointcut
    }
}