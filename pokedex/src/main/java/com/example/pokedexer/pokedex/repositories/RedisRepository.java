package com.example.pokedexer.pokedex.repositories;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import static com.google.gson.reflect.TypeToken.getParameterized;

@Repository
public class RedisRepository {

    @Autowired
    public RedisRepository() {
    }

    public static <T> void setObject(String key, T object, JedisPool jedisPool) {
        try (Jedis jedis = jedisPool.getResource()) {
            Gson gson = new Gson();
            String json = gson.toJson(object);
            jedis.set(key, json);
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }

    public static <T> List<T> getObjectList(String key, JedisPool jedisPool, Class<T> type) {
        try (Jedis jedis = jedisPool.getResource()) {
            Gson gson = new Gson();
            String json = jedis.get(key);
            Type listType = getParameterized(List.class, type).getType();
            ArrayList retObject = gson.fromJson(json, listType);
            return retObject;
        }
        catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }
}
