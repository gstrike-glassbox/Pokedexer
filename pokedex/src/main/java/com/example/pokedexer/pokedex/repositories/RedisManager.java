package com.example.pokedexer.pokedex.repositories;

import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

import java.time.Duration;

public class RedisManager {
    private static volatile JedisPool jedisPool;
    private static JedisPoolConfig buildPoolConfig() {
        final JedisPoolConfig poolConfig = new JedisPoolConfig();
        poolConfig.setMaxTotal(10);
        poolConfig.setMaxIdle(10);
        poolConfig.setMinIdle(1);
        poolConfig.setTestOnBorrow(true);
        poolConfig.setTestOnReturn(true);
        poolConfig.setTestWhileIdle(true);
        poolConfig.setMinEvictableIdleTime(Duration.ofSeconds(60));
        poolConfig.setTimeBetweenEvictionRuns(Duration.ofSeconds(30));
        poolConfig.setNumTestsPerEvictionRun(3);
        poolConfig.setBlockWhenExhausted(true);
        return poolConfig;
    }

    public static JedisPool initJedisPool() {
        if (jedisPool == null) {
            JedisPoolConfig poolConfig = buildPoolConfig();
            System.out.println("redis: http://redis-cache:6379");
            JedisPool jedisPool = new JedisPool(poolConfig, "http://redis-cache:6379");
            return jedisPool;
        }
        else {
            return jedisPool;
        }
    }
}
