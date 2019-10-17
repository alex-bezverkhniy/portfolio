package com.alexbezverkhniy.blogapi.repository.search;

import com.alexbezverkhniy.blogapi.domain.Post;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Post} entity.
 */
public interface PostSearchRepository extends ElasticsearchRepository<Post, Long> {
}
