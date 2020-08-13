package com.team.web.statistics;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QStatistics is a Querydsl query type for Statistics
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QStatistics extends EntityPathBase<Statistics> {

    private static final long serialVersionUID = 1104848272L;

    public static final QStatistics statistics = new QStatistics("statistics");

    public final StringPath dailyProfit = createString("dailyProfit");

    public final NumberPath<Long> keyId = createNumber("keyId", Long.class);

    public final StringPath monthlyProfit = createString("monthlyProfit");

    public final StringPath pattern = createString("pattern");

    public final StringPath visit = createString("visit");

    public final StringPath yearlyProfit = createString("yearlyProfit");

    public QStatistics(String variable) {
        super(Statistics.class, forVariable(variable));
    }

    public QStatistics(Path<? extends Statistics> path) {
        super(path.getType(), path.getMetadata());
    }

    public QStatistics(PathMetadata metadata) {
        super(Statistics.class, metadata);
    }

}

