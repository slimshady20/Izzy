package com.team.web.article;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QArticle is a Querydsl query type for Article
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QArticle extends EntityPathBase<Article> {

    private static final long serialVersionUID = 1643035648L;

    public static final QArticle article = new QArticle("article");

    public final NumberPath<Long> articleId = createNumber("articleId", Long.class);

    public final StringPath comContents = createString("comContents");

    public final StringPath comRegDate = createString("comRegDate");

    public final StringPath contents = createString("contents");

    public final StringPath image = createString("image");

    public final StringPath regDate = createString("regDate");

    public final StringPath title = createString("title");

    public final StringPath video = createString("video");

    public final StringPath writer = createString("writer");

    public QArticle(String variable) {
        super(Article.class, forVariable(variable));
    }

    public QArticle(Path<? extends Article> path) {
        super(path.getType(), path.getMetadata());
    }

    public QArticle(PathMetadata metadata) {
        super(Article.class, metadata);
    }

}

