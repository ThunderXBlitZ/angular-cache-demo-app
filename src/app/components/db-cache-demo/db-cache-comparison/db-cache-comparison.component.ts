import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface DBCacheStrategy {
  name: string;
  description: string;
  cache: number | null;
  // cacheHit: boolean;
  // cacheMiss: boolean;
  // cacheHitOrMiss: string;
  // responseTime: number;
  // logs: string[];
}

@Component({
  selector: 'app-db-cache-comparison',
  standalone: true,
  imports: [NgFor],
  templateUrl: './db-cache-comparison.component.html',
  styleUrl: './db-cache-comparison.component.scss'
})
export class DBCacheComparisonComponent {
  strategies: DBCacheStrategy[] = [
    { name: 'No Cache', description: 'Direct database access', cache: null },
    { name: 'Cache-Aside', description: 'Check cache first, update cache on miss', cache: null },
    { name: 'Read-Through', description: 'Cache automatically loads from DB on miss', cache: null },
    { name: 'Write-Through', description: 'Write to cache and DB simultaneously', cache: null },
    { name: 'Write-Behind', description: 'Write to cache, async update to DB', cache: null }
  ];

  private db = new Map<string, any>();
  private dbLatency = 100; // Simulated DB latency in ms
  private cacheLatency = 10; // Simulated cache latency in ms

  ngOnInit() {
    // Initialize DB with some data
    for (let i = 1; i <= 10; i++) {
      this.db.set(`key${i}`, `value${i}`);
    }
  }

  simulateRead(key: string) {
    this.strategies.forEach(strategy => {
      const start = performance.now();
      switch (strategy.name) {
        case 'No Cache':
          this.simulateDbRead(key);
          break;
        case 'Cache-Aside':
          this.cacheAsideRead(strategy, key);
          break;
        case 'Read-Through':
          this.readThroughCache(strategy, key);
          break;
        case 'Write-Through':
        case 'Write-Behind':
          this.cacheAsideRead(strategy, key); // For simplicity, use cache-aside for read operations
          break;
      }
      const end = performance.now();
      this.updateMetrics(strategy, 'read', end - start);
    });
  }

  simulateWrite(key: string, value: any) {
    this.strategies.forEach(strategy => {
      const start = performance.now();
      switch (strategy.name) {
        case 'No Cache':
          this.simulateDbWrite(key, value);
          break;
        case 'Cache-Aside':
        case 'Read-Through':
          this.cacheAsideWrite(strategy, key, value);
          break;
        case 'Write-Through':
          this.writeThroughCache(strategy, key, value);
          break;
        case 'Write-Behind':
          this.writeBehindCache(strategy, key, value);
          break;
      }
      const end = performance.now();
      this.updateMetrics(strategy, 'write', end - start);
    });
  }

  private simulateDbRead(key: string): any {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.db.get(key));
      }, this.dbLatency);
    });
  }

  private simulateDbWrite(key: string, value: any): any {
    return new Promise(resolve => {
      setTimeout(() => {
        this.db.set(key, value);
        resolve(true);
      }, this.dbLatency);
    });
  }

  private cacheAsideRead(strategy: DBCacheStrategy, key: string): any {
    /*
    if (strategy.cache.has(key)) {
      return new Promise(resolve => {
        setTimeout(() => {
         // resolve(strategy.cache.get(key));
        }, this.cacheLatency);
      });
    } else {
      return this.simulateDbRead(key).then((value: any) => {
        // strategy.cache.set(key, value);
        return value;
      });
    }
    */  
  }

  private cacheAsideWrite(strategy: DBCacheStrategy, key: string, value: any): void {
    // strategy.cache.set(key, value);
    this.simulateDbWrite(key, value);
  }

  private readThroughCache(strategy: DBCacheStrategy, key: string): any {
    /*
    if (strategy.cache.has(key)) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(strategy.cache.get(key));
        }, this.cacheLatency);
      });
    } else {
      return this.simulateDbRead(key).then((value: any) => {
        strategy.cache.set(key, value);
        return value;
      });
    }
      */
  }

  private writeThroughCache(strategy: DBCacheStrategy, key: string, value: any): void {
    // strategy.cache.set(key, value);
    this.simulateDbWrite(key, value);
  }

  private writeBehindCache(strategy: DBCacheStrategy, key: string, value: any): void {
    // strategy.cache.set(key, value);
    setTimeout(() => {
      this.simulateDbWrite(key, value);
    }, 0); // Simulate async write
  }

  private updateMetrics(strategy: DBCacheStrategy, operation: 'read' | 'write', responseTime: number) {
    /*
    strategy.metrics.totalOperations++;
    if (operation === 'read') {
      if (strategy.cache.has(key)) {
        strategy.metrics.hits++;
      } else {
        strategy.metrics.misses++;
      }
    }
    strategy.metrics.avgResponseTime = 
      (strategy.metrics.avgResponseTime * (strategy.metrics.totalOperations - 1) + responseTime) / 
      strategy.metrics.totalOperations;
      */
  }

  generateRandomOperation() {
    const operation = Math.random() > 0.7 ? 'write' : 'read';
    const key = `key${Math.floor(Math.random() * 10) + 1}`;
    const value = `value${Math.floor(Math.random() * 100)}`;

    if (operation === 'read') {
      this.simulateRead(key);
    } else {
      this.simulateWrite(key, value);
    }
  }
}
